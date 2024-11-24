import React from 'react'
import "../Experience/Experience.css"
import img1 from "../../assets/logo/innomatics.png"
import img2 from "../../assets/logo/Bk.png"
import img3 from "../../assets/logo/intership_studio.png"
import img4 from "../../assets/logo/Dlithe.png"

function Experience() {
    return (
        <div className="Experience">
            <div class="headline">
                    <h1>PROJECT</h1>
                </div>
            <section id="timeline">
                <article>
                    <div class="inner">
                        <img src={img1} alt="" />
                        <p>JAN 2024 - APR 2024</p>
                        <h2>Data Science Intern</h2>
                        <p>Innomatics Research Labs</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                        <img src={img2} alt="" />
                        <p>APR 2023 - MAR 2024</p>
                        <h2>Assistant Professor</h2>
                        <p>BK Model College of Commerce and Science</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                        <img src={img4} alt="" />
                        <p>NOV 2023 - NOV 2023</p>
                        <h2>IoT Intern</h2>
                        <p>DLithe</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                        <img src={img3} alt="" />
                        <p>MAY 2023 - JUN 2023</p>
                        <h2>C++ and Data Structure Intern</h2>
                        <p>Internship Studio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                        <img src={img1} alt="" />
                        <p>FEB 2023 - APR 2023</p>
                        <h2>Full Stack Intern</h2>
                        <p>Innomatics Research Labs</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
            </section>
            <h1 className='title'>Education</h1>
            <section id="timeline">
                <article>
                    <div class="inner">
                        <img src={img1} alt="" />
                        <p>JAN 2024 - APR 2024</p>
                        <h2>Data Science Intern</h2>
                        <p>Innomatics Research Labs</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                        <img src={img2} alt="" />
                        <p>APR 2023 - MAR 2024</p>
                        <h2>Assistant Professor</h2>
                        <p>BK Model College of Commerce and Science</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                <article>
                    <div class="inner">
                        <img src={img3} alt="" />
                        <p>NOV 2023 - NOV 2023</p>
                        <h2>IoT Intern</h2>
                        <p>DLithe</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa.
                            Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                    </div>
                </article>
                
            </section>
        </div>
    )
}

export default Experience