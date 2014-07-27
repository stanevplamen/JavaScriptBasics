window.onload = onBodyLoad();

function onBodyLoad() {
    var attributes = {
        id: "tests",
        class: "dynamicitems"
    };

    item.addElement("#ul-element", "li", attributes, "<a href='#'>dynamic element 05</a>");
    item.removeElements("ul", "li:first-child");
    item.attachEventHandler("button", "click", function () { alert("Dom handler test."); });

    for (var i = 6; i < 20; i++) {

        item.addElementViaBuffer("#wrapper", "div", null, "dynamic div added: " + i);
        item.addElementViaBuffer("#ul-element", "li", null, "<a href='#'>dynamic list item" + i + ".</a>");
    }
}