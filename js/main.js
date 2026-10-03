const div = document.querySelector(".container.my-5");
const creatorElement = function (elName, textContent, className) {
  const createdElement = document.createElement(elName);
  createdElement.textContent = textContent;
  createdElement.className = className;
  return createdElement
}
card = [
  {
    id: 124,
    title: "Samgung Note 20 Ultra",
    img: "https://picsum.photos/300/200",
    price: 8300000,
    model: "Samsung",
    addedDate: new Date("2021-10-12").toISOString(),
    benefits: ["32gb", "1tb"]
  }
]

const includer = creatorElement("div", "", "d-flex justify-content-between");
const title = creatorElement("h1", "Gilos.uz/smartphones", "h2");
const button = creatorElement("button", "", "btn btn-primary px-4");
button.dataset.bsTarget = "#addProductModal";
button.dataset.bsToggle = "modal";
const buttontext = creatorElement("span", "Add product", "me-2");
const i = creatorElement("i", "", "fa-solid fa-plus");

button.append(buttontext, i);
includer.append(title, button);
div.append(includer);

const row = creatorElement("div", "", "row mt-5");
const col = creatorElement("div", "", "col-3");
const h2 = creatorElement("h2", "Filter", "h4 mb-4");
const form = creatorElement("form", "", "");
form.action = "#";
const formdiv = creatorElement("div", "", "mb-3");
const label = creatorElement("label", "Search", "form-label");
label.htmlFor = "search";
const input = creatorElement("input", "", "form-control");
input.type = "search";
input.id = "search";
input.placeholder = "Falonchi";
const diw = creatorElement("div", "", "mb-3");
const label2 = creatorElement("label", "Price", "form-label");
const div2 = creatorElement("div", "", "row");
const div3 = creatorElement("div", "", "col-6");
const input2 = creatorElement("input", "", "form-control");
input2.type = "number";
input2.placeholder = "From";
input2.id = "From";
input2.ariaLabel = "From";
input2.min = "0";
const div4 = creatorElement("div", "", "col-6");
const input3 = creatorElement("input", "", "form-control")
input3.type = "number";
input3.placeholder = "to";
input3.id = "to";
input3.ariaLabel = "to";
input3.min = "0";

const d1iv = creatorElement("div", "", "mb-3");
const label3 = creatorElement("label", "Manufacturer", "form-label");
label3.htmlFor = "manufacturer";
const select = creatorElement("select", "", "form-select");
select.id = "manufacturer";
const option1 = creatorElement("option", "Manufacturer", "");
option1.value = "All";
const option11 = creatorElement("option", "Apple", "");
option11.value = "Apple";
const d2iv = creatorElement("div", "", "mb-3");
const label4 = creatorElement("label", "Sort by", "form-label");
label4.htmlFor = "sortby";
const select2 = creatorElement("select", "", "form-select");
select2.id = "sortby";
const option2 = creatorElement("option", "Name", "");
option2.value = "1";
const option3 = creatorElement("option", "Price: to lowest", "");
option3.value = "2";
const option4 = creatorElement("option", "Price: to highest", "");
option4.value = "3";
const button2 = creatorElement("button", "Filter", "btn btn-primary d-block w-100 py-2");

const section = document.querySelector("section");
section.className = "col-9";
const sectiondiv = creatorElement("div", "", "d-flex justify-content-between align-items-baseline");
const text = creatorElement("h2", "Products list", "h4 mb-4");
const tag = creatorElement("p", "Count: 4", "");
const list = creatorElement("ul", "", "row list-unstyled g-3");
list.id = "product-list";
const listitem = creatorElement("li", "", "col-4");
const itemdiv = creatorElement("li", "", "card position-relative");
const img = creatorElement("img", "", "card-img-top")
img.src = "https://picsum.photos/300/200";
const itemdiv2 = creatorElement("div", "", "card-body");
const sectiontitle = creatorElement("h2", "Gadget title", "card-title")
const sectionprice = creatorElement("p", "2.000.000", "text fw-bocardld");
const sectionprice2 = creatorElement("p", "2.000.000", "card-text");
const breand = creatorElement("p", "Xiaomi (gadget firmasi)", "badge bg-success");
const date = creatorElement("p", "12.05.2022", "card-text");
const inlist2 = creatorElement("ul", "", "d-flex flex-wrap list-unstyled");
const item1 = creatorElement("p", "8gb", "badge bg-primary me-1 mb-1");
const item2 = creatorElement("p", "128gb", "badge bg-primary me-1 mb-1");
const item3 = creatorElement("p", "Waterproof", "badge bg-primary me-1 mb-1");
const item4 = creatorElement("p", "Falon yaxshi tarafi", "badge bg-primary me-1 mb-1");
const buttondiv = creatorElement("div", "", "position-absolute top-0 end-0 d-flex");
const button3 = creatorElement("button", "", "btn rounded-0 btn-secondary");
const i2 = creatorElement("i", "", "fa-solid fa-pen");
const button4 = creatorElement("button", "", "btn rounded-0 btn-danger");
const i3 = creatorElement("i", "", "fa-solid fa-trash");
i3.style.pointerEvents = "none";
button4.setAttribute("data-section", "id");

const modaldiv = creatorElement("div", "", "modal fade");
modaldiv.id = "addProductModal";
modaldiv.tabindex = "-1";
modaldiv.ariaLabelledBy = "addProductModalLabel";
modaldiv.ariaHidden = "true";
const modaldiv2 = creatorElement("div", "", "modal-dialog");
const modaldiv3 = creatorElement("div", "", "modal-content");
const modaldiv4 = creatorElement("div", "", "modal-header");
const h5 = creatorElement("h5", "Add product", "modal-title");
const modalbutton = creatorElement("button", "", "btn-close");
modalbutton.type = "button";
modalbutton.dataset.bsDismiss = "modal";
modalbutton.ariaLabel = "Close";
const modalbody = creatorElement("div", "", "modal-body");
const modalform = creatorElement("form", "", "");
modalform.id = "modal-form";
const modiv1 = creatorElement("div", "", "mb-3");
const modivlabel = creatorElement("label", "Title", "form-label");
modivlabel.htmlFor = "title";
const modivinput = creatorElement("input", "", "form-control");
modivinput.type = "text";
modivinput.id = "product-title";
modivinput.placeholder = "Falon telefon";
const modiv2 = creatorElement("div", "", "mb-3");
const modivlabel2 = creatorElement("label", "Price", "form-label");
modivlabel2.htmlFor = "price";
const modivinput2 = creatorElement("input", "", "form-control");
modivinput2.type = "number";
modivinput2.id = "price";
modivinput2.placeholder = "12400000";
const modiv3 = creatorElement("div", "", "mb-3");
const modivlabel3 = creatorElement("label", "Manufacturer", "form-label");
modivlabel3.htmlFor = "product-manufacturer";
const modivselect = creatorElement("select", "", "form-select");
modivselect.id = "product-manufacturer";
const modivoption = creatorElement("option", "Select a manufacturer", "");
modivoption.value = "0";
modivoption.disabled = true;
modivoption.selected = true;
const modivoption1 = creatorElement("option", "Apple", "");
modivoption1.value = "apple";
const modivoption2 = creatorElement("option", "Samsung", "");
modivoption2.value = "samsung";
const modivoption3 = creatorElement("option", "Xiaomi", "");
modivoption3.value = "xiaomi";
const modivoption4 = creatorElement("option", "Vivo", "");
modivoption4.value = "vivo";
const modivbenefits = creatorElement("div", "", "mb-3");
const benefitslabel = creatorElement("label", "benefits", "form-label");
benefitslabel.htmlFor = "benefits";
const benefitsinput = creatorElement("input", "", "form-control");
benefitsinput.type = "text";
benefitsinput.id = "benefits";
benefitsinput.placeholder = "150";
const benefitslist = creatorElement("ul", "", "d-flex flex-wrap list-unstyled mt-3");
const benefitsitem1 = creatorElement("li", "", "me-1 mb-1");
const benefitsbutton1 = creatorElement("button", "8gb", "btn btn-sm badge rounded-pill btn-danger");
benefitsbutton1.type = "button";
const benefitsitem2 = creatorElement("li", "", "me-1 mb-1");
const benefitsbutton2 = creatorElement("button", "128gb", "btn btn-sm badge rounded-pill btn-danger");
benefitsbutton2.type = "button";
const benefitsitem3 = creatorElement("li", "", "me-1 mb-1");
const benefitsbutton3 = creatorElement("button", "Waterproof", "btn btn-sm badge rounded-pill btn-danger");
benefitsbutton3.type = "button";
const benefitsitem4 = creatorElement("li", "", "me-1 mb-1");
const benefitsbutton4 = creatorElement("button", "Falon yaxshi tarafi", "btn btn-sm badge rounded-pill btn-danger");
benefitsbutton4.type = "button";
const buttonend = creatorElement("button", "Add product", "btn btn-primary d-block w-100 p-2");
buttonend.type = "submit";

benefitsitem1.append(benefitsbutton1)
benefitsitem2.append(benefitsbutton2)
benefitsitem3.append(benefitsbutton3)
benefitsitem4.append(benefitsbutton4)
benefitslist.append(benefitsbutton1, benefitsbutton2, benefitsbutton3, benefitsbutton4);
modivbenefits.append(benefitslabel, benefitsinput, benefitslist);
modivselect.append(modivoption, modivoption1, modivoption2, modivoption3, modivoption4);
modiv1.append(modivlabel, modivinput);
modiv2.append(modivlabel2, modivinput2);
modiv3.append(modivlabel3, modivselect);
modalform.append(modiv1, modiv2, modiv3, modivbenefits, buttonend);
modalbody.append(modalform);
modaldiv4.append(h5, modalbutton);
modaldiv3.append(modaldiv4, modalbody);
modaldiv2.append(modaldiv3);
modaldiv.append(modaldiv2);
document.body.append(modaldiv);

div4.append(input3);
div3.append(input2);
div2.append(div3, div4);
diw.append(label2);
diw.append(div2);
formdiv.append(label, input);
select.append(option1, option11);
d1iv.append(label3, select);
select2.append(option2, option3, option4);
d2iv.append(label4, select2);
form.append(formdiv, diw, d1iv, d2iv, button2);
col.append(h2, form);

button4.append(i3);
button3.append(i2);
buttondiv.append(button3, button4);
inlist2.append(item1, item2, item3, item4);
itemdiv2.append(sectiontitle, sectionprice, sectionprice2, breand, date, inlist2, buttondiv);
itemdiv.append(img, itemdiv2);
listitem.append(itemdiv);
list.append(listitem);
sectiondiv.append(text, tag);
section.append(sectiondiv, list);

row.append(col, section);
div.append(row);

section.addEventListener("click", function (evt) {

  if (evt.target.matches(".btn-danger")) {}
  const clicedElement = evt.target.dataset.card;
  const findedIndex = card.findIndex((card) => {
    return card.id = clicedElement
  })
card.splice(findedIndex,1)
  console.log(card)

});