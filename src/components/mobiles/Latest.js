import React from 'react';

const Latest = () => {
    return(
        <section id="c-latest" className="mt-4">
            <div className="c-latest__head">
                <div className="font-body-bold mr-4 mb-1 mt-3 text-right">
                    <a className="h3 c-title" href="#latest">
                        أحــــــدث الموبيلات
                    </a>
                </div>
                <div className="row c-latest__row">
                    <div className="col-sm-4 col-lg-3 col-6 c-latest__section">
                        <div className="c-latest__overlay">
                            <a className="text-center c-latest__right" href="mobile.html">
                                <h4 className="font-body-bold text-secondary my-1">موتورولا</h4>
                                <img className="mt-2" src="./assets/img/mobiles/motorola/motorola-moto-z3-play.png" alt=""/>
                                <div className="h4 my-2 font-body-bold">Moto Z3</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-3 col-6 c-latest__section">
                        <div className="c-latest__overlay">
                            <a className="text-center c-latest__right" href="mobile.html">
                                <h4 className="font-body-bold text-secondary my-1">موتورولا</h4>
                                <img className="mt-2" src="./assets/img/mobiles/motorola/motorola-moto-z2-force-.png" alt=""/>
                                <div className="h4 my-2 font-body-bold">Moto Z2 Force</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-3 col-6 c-latest__section">
                        <div className="c-latest__overlay">
                            <a className="text-center c-latest__right" href="mobile.html">
                                <h4 className="font-body-bold text-secondary my-1">سوني</h4>
                                <img className="mt-2" src="./assets/img/mobiles/sony/sony-xperia-xz3.png" alt=""/>
                                <div className="h4 my-2 font-body-bold">Xperia XZ3</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-3 col-6 c-latest__section">
                        <div className="c-latest__overlay">
                            <a className="text-center c-latest__right" href="mobile.html">
                                <h4 className="font-body-bold text-secondary my-1">زد تي إي</h4>
                                <img className="mt-2" src="./assets/img/mobiles/zte/zte-axon-9-pro-r.png" alt=""/>
                                <div className="h4 my-2 font-body-bold">Axon 9 Pro</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-3 col-6 c-latest__section">
                        <div className="c-latest__overlay">
                            <a className="text-center c-latest__right" href="mobile.html">
                                <h4 className="font-body-bold text-secondary my-1">شارب</h4>
                                <img className="mt-2" src="./assets/img/mobiles/sharp/sharp-aquos-d10.png" alt=""/>
                                <div className="h4 my-2 font-body-bold">Aquos D10</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-3 col-6 c-latest__section">
                        <div className="c-latest__overlay">
                            <a className="text-center c-latest__right" href="mobile.html">
                                <h4 className="font-body-bold text-secondary my-1">فيفو</h4>
                                <img className="mt-2" src="./assets/img/mobiles/vivo/vivo-x23-r.png" alt=""/>
                                <div className="h4 my-2 font-body-bold">X23</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>          
    );
}
export default Latest;
