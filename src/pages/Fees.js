import { Container } from "../GlobalStyle";
import "./fees.scss";
const Fees = () => {
    return (
        <>
            <Container>
                <h1>Fees</h1>
                <div className="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Initial Physiotherapy Rates</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard Initial Appointment (30 Mins)</td>
                                <td>$67</td>
                            </tr>
                            <tr>
                                <td>Extended Initial Appointment (60 Mins)</td>
                                <td>$134</td>
                            </tr>
                            <tr>
                                <td>Senior Physiotherapist Initial Appointment (30 Mins)</td>
                                <td>$105</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Follow-Up Physiotherapy Rates</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Short Follow-Up Appointment (20mins)</td>
                                <td>$80</td>
                            </tr>
                            <tr>
                                <td>Standard Follow-Up Appointment (30 Mins)</td>
                                <td>$95</td>
                            </tr>
                            <tr>
                                <td>Extended Follow-Up Appointment (60 Mins)</td>
                                <td>$180</td>
                            </tr>
                            <tr>
                                <td>Senior Physiotherapist Standard Follow-Up Appointment (30 Mins)</td>
                                <td>$95</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Medicare & Department of Veterans Affairs Claims</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EPC/Medicare Care Plans (30mins)</td>
                                <td>$36</td>
                            </tr>
                            <tr>
                                <td>Department of Veterans Affairs (30 Mins)</td>
                                <td>Bulk Billing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Physiotherapist Exercise and Rehab Sessions: (Gym Only)</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard Rehab Consult (30mins)</td>
                                <td>$90</td>
                            </tr>
                            <tr>
                                <td>Block of 10 Rehab Consults (30mins)</td>
                                <td>$80 ($800)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Remedial Massage Rates (Private Health Benefits Apply)</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Initial Remedial Massage Appointment (45mins)</td>
                                <td>$75</td>
                            </tr>
                            <tr>
                                <td>30 Minute Remedial Massage (30mins)</td>
                                <td>$80</td>
                            </tr>
                            <tr>
                                <td>45 Minute Remedial Massage (45mins)</td>
                                <td>$95</td>
                            </tr>
                            <tr>
                                <td>60 Minute Remedial Massage (60mins)</td>
                                <td>$120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Spikey Ball/ Trigger Point Ball</td>
                                <td>$15</td>
                            </tr>
                            <tr>
                                <td>Short Foam Roller</td>
                                <td>$30</td>
                            </tr>
                            <tr>
                                <td>Long Foam Roller</td>
                                <td>$65</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
}

export default Fees;