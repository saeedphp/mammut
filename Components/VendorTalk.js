import { useState } from "react"

export default function VendorTalk() {
    const [state, setState] = useState(false);
    const sendTicket = (e) => {
        e.preventDefault();
        setState(false);
        alert("پیام شما ارسال شد");
    }
    return (
        <div className="vendorTalk">
            <i className="fal fa-comments-alt" onClick={() => setState(true)}/>
            <div className={`talk ${state && "opened"}`}>
                <form>
                    <i className="far fa-times" onClick={() => setState(false)} />
                    <h4>
                         ارتباط با ما
                    </h4>
                    <input type="text" placeholder="عنوان پیام" ></input>
                    <textarea placeholder="متن پیام ..."></textarea>
                    <div className="buttons">
                        <button type="submit" onClick={(e) => sendTicket(e)}>
                            ارسال پیام 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}