const notification = document.querySelector(".notification");
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer:5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is a error toast',
    },
    warning: {
        icon: 'fa-circle-exclamation',
        text: 'Warning: This is a warning toast',
    },
    info: {
        icon: 'fa-circle-check',
        text: 'Info: This is an information toast',
    }
}
const removeToast =(toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); //menghilangkan timeout toast
    setTimeout(() => toast.remove(), 500); //menghapus toast setalah 500ms
}
const createToast = (id) =>{
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); //membuat elemen baru li untuk toast
    toast.className = `toast ${id}`; //mengatur kelas pada toast
    //mengatur HTML pada toast
    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

    notification.appendChild(toast); //menambahkan toast untuk notifikasi ul
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}
// menambahkan addEventListener pada button pada saat di click                            
buttons.forEach( btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});