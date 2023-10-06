const Media=()=>{
    return(
        <>
            <img alt="Logo" src="static/final.png"/>
            <video controls>
                <source src="static/Peru.mp4"/>
            </video>
        </>
    )
}

export const Report=()=>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Roll Number</th><th>Dept</th>
                        <th>projects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09CS040</td>
                        <td>CSE</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>09CS040</td>
                        <td>CSE</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>09CS040</td>
                        <td>CSE</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

const Forms=()=>{
    return(
        <>
            <form name="order" method="post">
            <table>
                <tbody>
                    <tr>
                        <td><label>Name of the Person</label></td>
                        <td>
                            <input type="text" name="fullname" placeholder="Name of Invoice" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Contact Number</label></td>
                        <td><input type="tel" name="contact" placeholder="mobile number"/></td>
                    </tr>
                    <tr>
                        <td><label>Email ID</label></td>
                        <td><input type="email" name="mail" placeholder="your email"/></td>
                    </tr>
                    <tr>
                        <td colspan="2">Delivery Address Here</td>
                    </tr>
                    <tr>
                        <td><label>Door.No</label></td>
                        <td>
                            <input type="number" name="door" placeholder="Door number" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Street</label></td>
                        <td><input type="text" placeholder="Street name" name="street"/></td>
                    </tr>
                    <tr>
                        <td><label>Address type</label></td>
                        <td>
                            <input type="radio" name="addresstype" value="office" /> Office
                            <input type="radio" name="addresstype" value="home" /> Home
                        </td>
                    </tr>
                    <tr>
                        <td>Delivery speed/ option</td>
                        <td>
                            <select name="speed">
                                <option>Select type of delivery</option>
                                <option>Regular</option>
                                <option>Same day</option>
                            </select>
                        </td>
                    </tr>
                    <tr align="center">
                        <td>
                            <input type="submit" value="place order" />
                        </td>
                        <td>
                            <input type="reset" value="cancel" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea name="description"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        </>
    )
}

export default Media
export {Forms}