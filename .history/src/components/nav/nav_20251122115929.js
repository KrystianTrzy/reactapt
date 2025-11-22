import './mav.css'


function nav() {

    return (
        <nav>
            <span>logo</span>

            <div className='links'>
                <link to="/posts"></link>
                <link to="/login"></link>
                <a href='https://google.com'></a>
            </div>
        </nav>

    )
}

export default nav;