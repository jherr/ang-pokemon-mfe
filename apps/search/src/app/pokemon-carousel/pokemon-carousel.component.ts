import { Component, OnInit, Input } from '@angular/core';

interface Pokemon {
  name: {
    english: string;
  };
}
interface Image {
  image: string;
  name: string;
}

@Component({
  selector: 'ang-pokemon-mfe-pokemon-carousel',
  templateUrl: './pokemon-carousel.component.html',
  styleUrls: ['./pokemon-carousel.component.scss'],
})
export class PokemonCarouselComponent implements OnInit {
  images: Image[] = [];
  @Input() search = '';

  ngOnInit(): void {
    fetch(
      'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json'
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.images = data
          .map((p: Pokemon) => ({
            image: `https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/${p.name.english.toLowerCase()}.jpg`,
            name: p.name.english,
          }))
          .filter((p: Image) => p.name.toLowerCase().indexOf(this.search) > -1)
          .slice(0, 10);
      });
  }
}
