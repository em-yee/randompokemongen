
const app = Vue.createApp({
  data() {
    return {
      id: 1,
      name: 'bulbasaur',
      types: ['grass'],
      type1: 'grass',
      type2: '',
      sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    }
  },
  methods: {
    async getPokemon() {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      let pokeNum = getRandomInt(365)

      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)

      const {id, name, types, sprites} = await res.json()

      console.log(types[0].type.name);

      this.id = id
      this.name = name
      this.types = types
      this.type1 = types[0].type.name
      // this.type2 = types[1].type.name
      this.sprites = sprites.front_default
    }
  }
})

app.mount('#app')
