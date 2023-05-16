import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
  return (
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#253c35':'white', color: props.mode==='dark'?'white':'black'}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'rgb(31 77 84)':'white', color: props.mode==='dark'?'white':'black'}} >
                    <strong>Analyze your Text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'rgb(31 77 84)':'white', color: props.mode==='dark'?'white':'black'}}>
                  Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, Character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'rgb(31 77 84)':'white', color: props.mode==='dark'?'white':'black'}}>
                <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'rgb(31 77 84)':'white', color: props.mode==='dark'?'white':'black'}}>
                    Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'rgb(31 77 84)':'white', color: props.mode==='dark'?'white':'black'}} >
                <strong> Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'rgb(31 77 84)':'white', color: props.mode==='dark'?'white':'black'}}>
                    This is word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera. It ssuits to count characters in facebook, bolg, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-success my-2">{btntext}</button>
            </div> */}
        </div>
    </div>  
  )
}
