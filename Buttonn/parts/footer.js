import  React from "react";

import Button from "element/Button";
import IconText from "part/IconText";
export default function footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 385 }}>
                        <IconText />
                        <p className="brand-tagLine">
                            We kaboon your beauty holiday instantly memorable.
                        </p>
                    </div>
                    <div className="col-auto m-5">
                        <h6 className="mt-2">For Beinners</h6>
                        <ul className="LIst-group Lis-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room 
                                </Button>
                            </li>
                            <li clasName="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                        <ul className="LIst-group Lis-group-flush">
                            <li className="List-group-item">
                                <Button type="link" href="/careers">
                                    Our careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li ClassName="list-group-item">
                                <Button type="link"href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="LIst-group Lis-group-fush">
                            <li className="list-group-item">
                                <Button isexternal type="link" href="mailto:support@staycation.id">
                                    Support@staycation.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isexternal type="link" href="tel:+6283181357353">
                                    021 - 2200 - 1996
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>StayCation, Kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 . All right reserved . Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
