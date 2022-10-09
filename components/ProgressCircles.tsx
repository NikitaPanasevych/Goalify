
const ProgressCircle : React.FC = () => {
    return(
    <div className="container__progressbars">
        <div className="progressbar">
            <svg className="progressbar__svg">
                <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle shadow"> </circle>
            </svg>
            <span className="progressbar__text shadow-html">Tasks</span>
        </div>
    </div>
    )
}

export default ProgressCircle;