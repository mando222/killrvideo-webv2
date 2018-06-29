import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import classNames from 'classnames';

class Root extends React.Component{
    render() {
        // Add a class to the body wrapper is specified on any of the matched routes
        // const wrapperClass = classNames(...this.props.routes.map(r => r.wrapperClassName));
        return (
            <div>
                <div>
                    <Header />
                    {/*<div id="body-wrapper" className={wrapperClass}>*/}
                        {/*{this.props.children}*/}
                        {/*<div id="push-footer" className="hidden-xs"></div>*/}
                    {/*</div>*/}
                    <Footer className="hidden-xs" />
                </div>
            </div>
        )
    }
}

export default Root