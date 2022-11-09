// search input
const searchInputEl = document.querySelector("#searchInput");
const searchInputClearIconEl = document.querySelector("[data-search-clear-icon]");

// change icon when getting focus
searchInputEl.addEventListener("focus", () => {
	if (searchInputEl.value !== "") {
		searchInputClearIconEl.classList.add("la-times");
		searchInputClearIconEl.classList.remove("la-search");
	}
});

// change icon when losing focus
searchInputEl.addEventListener("blur", () => {
	if (searchInputEl.value === "") {
		searchInputClearIconEl.classList.add("la-search");
		searchInputClearIconEl.classList.remove("la-times", "cursor-pointer");
	}
});

// change icon when typing
searchInputEl.addEventListener("keyup", () => {
	if (searchInputEl.value !== "") {
		searchInputClearIconEl.classList.add("la-times", "cursor-pointer");
		searchInputClearIconEl.classList.remove("la-search");
	} else {
		if (!searchInputClearIconEl.classList.contains("la-search")) {
			searchInputClearIconEl.classList.add("la-search");
			searchInputClearIconEl.classList.remove("la-times", "cursor-pointer");
		}
	}
});

// clear search and change icon
searchInputClearIconEl.addEventListener("click", () => {
	if (!searchInputClearIconEl.classList.contains("la-search")) {
		clearSearch();
		searchInputClearIconEl.classList.add("la-search");
		searchInputClearIconEl.classList.remove("la-times", "cursor-pointer");
	}
});

const clearSearch = () => {
	searchInputEl.value = "";
	searchInputEl.focus();
};
