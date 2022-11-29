import React from 'react'

import button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {

    return
          <header className="spacing-sm"> 
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Brandicon/>
            </nav>
            <div className="collapse navbar-colappse">
                <ul className="navbar-nav ml-auto">
                    <li className={'nav-item1 (getNavLinkClass("/")'}>
                        <Button className="nav-link" type="link" href="">
                            Home
                        </Button>
                    </li>
                    <li className={'nav-item1 (getNavLinkClass("/browse-by")'}>
                        <Button className="nav-link" type="link" href="/browse-by">
                            Browse By
                        </Button>
                    </li>
                    <li className={'nav-item1 (getNavLinkClass("/stories")'}>
                        <Button className="nav-link" type="link" href="/stories">
                            Stories
                        </Button>
                    </li>
                    <li className={'nav-item (getNavLinkClass("/agents")'}>
                        <Button className="nav-link" type="link" href="/agents">
                            Agents
                        </Button>
                    </li>
                </ul>
            </div>
          </div>
          </header>
}