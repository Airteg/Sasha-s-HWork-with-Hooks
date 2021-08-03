export default function Modal(arg) {
  function formSubmit(event) {
    event.preventDefault();
    nVis();
    let inp = event.target.elements;
    console.log("------AddUser.jsx--------");
    console.log(inp.name.value, inp.phone.value, inp.email.value);
    console.log("----------END------------");
    // dicpatch(AddNewUsers(inp.name.value, inp.phone.value, inp.email.value));
  }
  function nVis() {
    let element = document.getElementById("modal");
    element.style.transform = "scale(0)";
  }

  return (
    <div className="visiblity" id="modal">
      <form onSubmit={formSubmit}>
        <div>
          <input type="text" name="name" placeholder="Name" defaultValue="" />
        </div>
        <div>
          <input type="text" name="phone" placeholder="Phone" defaultValue="" />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            defaultValue=""
          />
        </div>
        <div>
          <button type="submit">Add users</button>
          <button type="reset" onClick={nVis}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
