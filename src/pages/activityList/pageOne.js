import React from "react"
import { Outlet } from 'react-router-dom'
class PageOne extends React.Component {
    render() {
        return (
            <div>
                <h1>活动页面1</h1>
                <Outlet />
            </div>
        )
    }
}
export default PageOne