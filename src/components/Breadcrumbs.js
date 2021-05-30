import { MdChevronRight } from "react-icons/md";

const Breadcrumbs = () => {
    return (
        
        <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ul className="breadcrumbs-list">
                <li>
                    <a href="/">
                        teft <MdChevronRight className="react-icon"/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        Circles <MdChevronRight className="react-icon"/>
                    </a>
                </li>
                <li>
                    <a href="/" className="breadcrumbs-current" aria-current="page">
                        Purple Circles <MdChevronRight className="react-icon"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Breadcrumbs
