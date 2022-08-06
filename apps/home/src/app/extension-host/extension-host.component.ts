import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  Input
} from '@angular/core';

@Component({
  selector: 'extension-host',
  templateUrl: './extension-host.component.html',
  styleUrls: ['./extension-host.component.scss'],
})
export class ExtensionHostComponent {
  _extension?: any;
  get extension(): any {
    return this._extension;
  }
  @Input() set extension(extension: any) {
    this._extension = extension;

    const componentRef: ComponentRef<{
      search: string;
    }> = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(this.extension)
    );

    componentRef.instance.search = this.randomCharacter();
  }

  randomCharacter(): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}
}
