//CRUD

let cats = ['Fluffy']

exports.create = (req, res) => {
  const { name } = req.params

  cats.push(name)
  res.send(cats)
}

exports.read = (req, res) => {
  console.log(req.user)
  res.send(cats)
}

exports.update = (req, res) => {
  const { name } = req.params

  cats = cats.map((cat) => {
    if (cat === name) {
      return cat + '_updated'
    }
    return cat
  })

  res.send(cats)
}

exports.delete = (req, res) => {
  //
  res.send('delete')
}
