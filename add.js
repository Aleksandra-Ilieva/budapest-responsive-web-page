function load() {

    let btnMore = document.querySelector("#btnMore");
    btnMore.addEventListener("click", addMoreInfo)



    let arrListWithITag = Array.from(document.querySelectorAll(".list-card-budapest li i"));

    let clearBtnArr = Array.from(document.querySelectorAll(".clear"));

    let btnAdd = document.querySelector("#btnBuy");

    btnAdd.addEventListener("click", addProducts);
    btnAdd.addEventListener("blur", reset);
let currentTags=[];
    function addMoreInfo(e) {

        let p = document.querySelector(".more");


        if(e.currentTarget.textContent==="READ LESS"){
            e.currentTarget.textContent="READ MORE";
            p.textContent="";
        }else {
            e.currentTarget.textContent="READ LESS";
            p.textContent = "Shuttle departure times are approximate, usually within five minutes, and are subject to traffic."
        }






    }

    arrListWithITag.forEach((i) => {
            i.addEventListener("click", changeColor);

        }
    );
    function changeColor(e) {

        let parent = e.currentTarget.parentElement.style.color = "green";
        const currentLi = e.currentTarget.parentElement;
        console.log(currentLi);

        let childrenList = currentLi.children;
        let btn = childrenList[childrenList.length - 1];

        btn.style.display = "block";
        currentTags.push(e.currentTarget);

    }


    clearBtnArr.forEach((currentBtn) => {
            currentBtn.addEventListener("click", clearColor)


        }
    );

    function clearColor(e) {
        e.currentTarget.parentElement.style.color = "white";
        e.currentTarget.style.display = "none";
        currentTags.pop();



    }


    function addProducts(e) {

        if(currentTags.length>0){
            e.currentTarget.textContent = "SUCCESSFULLY ADDED"
            e.currentTarget.style.color = "green"
            clearBtnArr.forEach((currentBtn) => {
                    currentBtn.parentElement.style.color = "white";
                    currentBtn.style.display = "none";

                }
            );
        }




    }


    function reset(e) {
        e.currentTarget.textContent = "ADD IN SHOPPING LIST"
        e.currentTarget.style.color = "white"
       currentTags=[];
    }


}