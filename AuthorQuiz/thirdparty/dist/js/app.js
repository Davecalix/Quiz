(function () {
  'use strict'
  var Quiz = React.createClass({
    propTypes: {
      data: React.PropTypes.array.isRequired
    },
    getInitialState () {
      return this.props.data.selectGame()
    },
    render () {
      return (
        <div>
          <div className='row'>
            <div className='col-md-4'>
              <img src={this.state.author.imageUrl} className='authorimage col-md-3' />
            </div>
            <div className='col-md-7'>
              {
                this.state.books.map(function (b) {
                  return (
                    <Book title={b} />
                  )
              }, this)}
            </div>
            <div className='col-md-1' />
          </div>
        </div>
      )
    }
  })
  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render () {
      return (
        <div>
          <h4>{this.props.title}</h4>
        </div>
      )
    }
  })
  var data = [
    {
      key: '1',
      name: 'Ramon Amaya Amador',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/RamonAmayaAmador.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Prision Verde', 'Cipotes', 'Los Brujos de Llamatepeque', 'El Senor de la Sierra']
    },
    {
      key: '2',
      name: 'Amanda Castro',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/AmandaCastro.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Quizas la sangre', 'Una vez un barco']
    },
    {
      key: '3',
      name: 'Argentina Diaz Lozano',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/ArgentinaDiazLozano.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Mayapan', 'Ciudad errante']
    },
    {
      key: '4',
      name: 'Froylan Turcios',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/FroylanTurcios.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Almas Tragicas', 'Almas del ayer', 'Anecdotario hondureno', 'Album secreto']
    },
    {
      key: '5',
      name: 'Jose Trinidad Reyes',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/JoseTrinidadReyes.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Micol', 'Noemi', '']
    },
    {
      key: '6',
      name: 'Lucila Gamero de Medina',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/LucilaGameroMedina.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Blanca Olmedo']
    },
    {
      key: '7',
      name: 'Roberto Sosa',
      imageUrl: 'http://localhost:8080/thirdparty/dist/images/autores/RobertoSosa.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Un mundo para todos dividido', 'Mascara suelta', 'Antologia Personal', 'The return of the river']
    }
  ]
  data.selectGame = function () {
    var books = _.shuffle(this.reduce(function (p, c, i) {
      return p.concat(c.books)
    }, [])).slice(0,4)
    var answer = books[_.random(books.lenght-1)]
    return {
      books: books,
      author: _.find(this, function (author) {
        return author.books.some(function (title) {
          return title === answer
        })
      })
    }
  }
  ReactDOM.render(<Quiz data={data} />, document.getElementById('app'))
})()
