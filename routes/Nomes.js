class Nomes{

    constructor(){
    this.names = [
    {
      name: 'Caio',
      meaning: 'Feliz, contente'
    },
    {
      name: 'Ana',
      meaning: 'Graciosa, cheia de graça'
    },
    {
      name: 'Luna',
      meaning: 'Lua, a iluminada, a feminina'
    }
]
}

getAll(req, res) {
    res.send(this.names)
}

getNameId(req, res) {
    const id = req.params.id
    res.send(this.names[id])
}
 /*post*/
create(req, res) {
    const name = req.body
    this.names.push(name)  
    res.send(this.names)
  }

/*del*/
remove(req, res) {
    const id = req.params.id
    this.names.splice(id, 1)
    res.send(this.names)
  }

/*put*/
update(req, res) {
      const id = req.params.id
      const name = req.body
      this.names[id] = name
      res.send(this.names)
  }
}


module.exports = new Nomes()