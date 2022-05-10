


function Footer(props) {
    return (
        <div style={{textAlign: "center"}}> 
        <h3 class="myContact">Contact me on</h3>
        <a href="https://www.whatsapp.com/" class="myContacts">
            <img class="myImage" style={{width: "50px"}} src="https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png" alt="whatsapp"/>
        </a>
        <a href="https://www.facebook.com/" class="myContacts">
            <img class="myImage" style={{width: 50}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU" alt="facebook"/>
        </a>
        <a href="https://mail.google.com/" class="myContacts">
            <img class="myImage" style={{width: 50}} src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="gmail"/>
        </a>    
        <h4 class="copyRight">Authers of the Document: Mohammad Haimour and Ahmad Tayseer.</h4>
        </div>
    )
}

export default Footer;