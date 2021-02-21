import React from 'react';

// HOC
import Aux from '../../../hoc/Aux';

// Components
import Column from '../Column/Column';

// CSS
// import classes from './TwoColumnView.module.css'

const twoColumnView = (props) => {
    return (
        <Aux>
        {/* <div className={["container", classes.Main].join(' ')}> */}
            {/* <div className="row"> */}
                {/* <Column customClasses={["Placeholder"]}/> */}
                <Column 
                    customClasses={["MainCenter"]}
                    colNum={5}
                >
                    {props.mainContent}
                </Column>
                <Column 
                    customClasses={["MainRight"]}
                    colNum={5}
                >
                    {props.sideContent}
                </Column>
            {/* </div> */}
        {/* </div> */}
        </Aux>
    );
}

export default twoColumnView;