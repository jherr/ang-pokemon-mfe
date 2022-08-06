import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

export interface ExtensionManifest {
  extensionPath: string;
  remoteName: string;
  exposedModule: string;
  extensionComponentName: string;
}

declare let AWS: any;

const bucketName = "module-federation-extensions";
const bucketRegion = "us-east-1";
const IdentityPoolId = "us-east-1:6b6dbac9-aed8-4ef7-bc5f-c6e441c0f3e0";

console.log(AWS);

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName }
});

const s3Host = 'http://module-federation-extensions.s3-website-us-east-1.amazonaws.com/';

const searchManifest: ExtensionManifest = {
  extensionPath: 'pokemon-search',
  remoteName: 'search',
  exposedModule: './CarouselComponent',
  extensionComponentName: 'PokemonCarouselComponent'
};

@Component({
  selector: 'ang-pokemon-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  extensionList: any[] = [];
  manifest?: any;

  async loadExtension (manifest: ExtensionManifest = searchManifest) {
    const { [`${manifest.extensionComponentName}`]: extension } = await loadRemoteModule({
      remoteEntry: `${s3Host}${manifest.extensionPath}/remoteEntry.js`,
      remoteName: manifest.remoteName,
      exposedModule: manifest.exposedModule,
    });
    this.extensionList?.push(extension);
  }

  ngOnInit() {
    const params = {
      Bucket: bucketName, 
      Key: `manifest.json`
     };

    s3.getObject(params, (err: any, data: any) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        const manifest = data.Body.toString('utf-8'); 
        this.manifest = JSON.parse(manifest);
        console.log(this.manifest);

        this.manifest.extensions.forEach((extensionManifest: ExtensionManifest) => {
          this.loadExtension(extensionManifest);
        });
      }
    });
  }

  s3upload(event: any) {
    const files = event.target.files;
    if (files) 
    {
      for(let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const filePath = `${searchManifest.extensionPath}/` + fileName;
        console.log(fileName);
  
        s3.upload({
           Key: filePath,
           Body: file,
           }, function(err: any, data: any) {
              if(err) {
               console.log(`error: ${err}`);
              }
           });
      };
    }
  }
}
