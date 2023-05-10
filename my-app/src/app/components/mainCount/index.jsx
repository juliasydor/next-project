import React from 'react';
import './styles.css'


const MainCount = () => {
    return (
        <main className='styledMain'>
            <div className='styledImg'>imagem</div>
            <div className='styledContainer'>
                <div className='styledContent'> 
                    <h1>Our industry</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur exercitationem quas numquam voluptatibus, praesentium earum fugiat sit ea blanditiis mollitia totam beatae quis architecto recusandae quam tempore reiciendis itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. issimos quam, vero corporis unde similique iure ex error consequuntur.</p>
                    <div className='styledCounterContainer'>
                        <div className='styledCounter1'>333</div>
                        <div className='styledCounter2'>999</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainCount;