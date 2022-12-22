const searchBar = document.querySelector(".content");
const searchBtn = document.querySelector(".search");
const searchBox = document.querySelector(".search_bar")
const cancel = document.querySelector(".cancel")
const searchData = document.querySelector(".searchBox")
searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchBar.classList.add("active");
    cancel.classList.add("active");
    if (searchBar.value != "") {
        searchData.classList.remove("active");
        searchData.innerHTML = " Ess thodi hota hai: " + searchBar.value;
    } else {
        searchData.innerHTML = "";
    }
}
cancel.onclick = () => {
    searchBtn.classList.remove("active");
    searchBox.classList.remove("active");
    searchBar.classList.remove("active");
    cancel.classList.remove("active");
    searchData.classList.add("active");
    searchBar.value = "";
}