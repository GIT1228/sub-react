import React from "react"
import { Outlet } from 'react-router-dom'
class PageTow extends React.Component {
    render() {
        return (
            <div>
                <h1>活动页面2</h1>
                <Outlet />
            </div>
        )
    }
}
export default PageTow