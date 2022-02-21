$(() => {

    let checkbox = $("#checkbox")
    checkbox.click(function(e) {
        if (e.target.checked) {
            $("#calc").css({ backgroundColor: "#113150" })
            $(".sign,.clean,.number").css({
                boxShadow: "2px 2px 0 # aaa",
                color: "#FFF"
            })
            $(".number").css({ backgroundColor: "#04293A" })
            $(".clean").css({ color: "#AA8C66" })
            $(".sign,.clean").css({ backgroundColor: "#064663" })
        } else {
            $("#calc").css({ backgroundColor: "#FFF8EE" })
            $(".sign,.clean,.number").css({ boxShadow: "2px 2px 0 # 333" })
            $(".number").css({ backgroundColor: "#DFE0DF" })
            $(".sign,.clean").css({ backgroundColor: "#AA8C66" })
            $("button").css({ color: "#000" })
            $(".clean").css({ color: "#064663" })
        }
    })

















})