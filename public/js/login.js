const loginFormEl = document.querySelector("[data-login-form]");

if (loginFormEl) {
	loginFormEl.addEventListener("submit", (ev) => {
		ev.preventDefault();
		handleLogin();
	});
}

const handleLogin = () => {
	window.location = "dashboard.html";
};
