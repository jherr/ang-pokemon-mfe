import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'ang-pokemon-mfe-carousel-host',
  templateUrl: './carousel-host.component.html',
  styleUrls: ['./carousel-host.component.scss'],
})
export class CarouselHostComponent implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { PokemonCarouselComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'search',
      exposedModule: './CarouselComponent',
    });
    const componentRef: ComponentRef<{
      search: string;
    }> = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(PokemonCarouselComponent)
    );
    componentRef.instance.search = 'p';
  }
}
