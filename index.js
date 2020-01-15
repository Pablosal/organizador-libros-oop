const DB = [
  {
    title: "hahaa",
    paginas: "21",
    paginaActual: "12",
    descripcion: "sadomasdsmadkasdmoasmdsad",
    image: "HOLA"
  }
];

class Books {
  constructor(title, paginas, paginaActual, descripcion, image) {
    (this.title = title),
      (this.paginas = paginas),
      (this.paginaActual = paginaActual),
      (this.descripcion = descripcion),
      (this.image = image);
  }
}

class UI {
  constructor() {}
  addBook() {
    const tituloInput = document.getElementById("titulo").value;
    const paginasInput = document.getElementById("paginas").value;
    const actualInput = document.getElementById("actual").value;
    const descripcionInput = document.getElementById("descripcion").value;
    if (!tituloInput || !paginasInput || !actualInput || !descripcionInput) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="alert alert-danger" role="alert">
      Inserta todos los datos
    </div>`;
      document.getElementById("dormas").appendChild(div);
      return;
    }
    const bookio = new Books(
      tituloInput,
      paginasInput,
      actualInput,
      descripcionInput,
      "Hola"
    );
    console.log(bookio);
    DB.push(bookio);
    const { image, title, paginas, paginaActual, descripcion } = bookio;
    this.displayBooks(image, title, paginas, paginaActual, descripcion);
  }
  displayBooks(image, title, paginas, paginaActual, descripcion) {
    const node = document.createElement("div");
    node.innerHTML = `
      <div class="primero">
        <div class="col-md-5">
        
            <h1>${image}</h1>
        </div>
        <div class="col-md-7">
            <h5 class="card-title">${title}</h5>
            <div class="col">
            <p class="card-text">${paginas}</p>
            <p class="card-text">${paginaActual}</p>
            <p class="card-text">${descripcion}</p>
            <a id="delete" name="delete" class="btn btn-danger btn-block" href="">Eliminar</a>
        </div>
        </div>
      </div>
      `;
    document.getElementById("sakatash").appendChild(node);
  }
  deleteBook(e) {
    if (e.target.name === "delete") {
      console.log("yes");
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }
}

const ui = new UI();
const run = e => {
  e.preventDefault();
  ui.addBook();
};
const dontrun = e => {
  e.preventDefault();
  // console.log(e.target.name);
  ui.deleteBook(e);
};
document.getElementById("adding").onclick = run;
document.getElementById("sakatash").onclick = dontrun;
DB.forEach(movie => {
  ui.displayBooks(
    movie.name,
    movie.descripcion,
    movie.paginas,
    movie.paginaActual,
    movie.image
  );
});
