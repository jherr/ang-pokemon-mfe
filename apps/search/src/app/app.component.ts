import { Component, OnInit } from '@angular/core';

interface Pokemon {
  name: {
    english: string;
  };
  image: string;
}

@Component({
  selector: 'ang-pokemon-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemonSource: Pokemon[] = [];
  pokemon: Pokemon[] = [];
  search = '';

  onSearchChange(search: string) {
    this.pokemon = this.pokemonSource
      .filter((p) =>
        p.name.english.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 20);
  }

  async ngOnInit() {
    fetch(
      'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json'
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.pokemonSource = data.map((p: Pokemon) => ({
          ...p,
          image: `https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/${p.name.english.toLowerCase()}.jpg`,
        }));
        this.pokemon = this.pokemonSource.slice(0, 20);
      });
  }
}
