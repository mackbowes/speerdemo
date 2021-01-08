import React, {useState} from 'react';
import RadioUnit from './RadioUnit';

// This was extremely difficult! 
// I'm still not sure if this is the most efficient method of obtaining mutual exclusivity, but it works!
// Normally I wouldn't leave such a specific item as a component because it is NOT reusable, but I think the logic is complex enough to NOT leave it in a page component for a code review. 

export default function RadioGroup(props) {
        
    let options = {basic: false, advanced: false, pro: false};

    const [isChecked, setIsChecked] = useState(options); // State contains keys

    const handleChange = name => {
        options = {basic: false, advanced: false, pro: false}; // reset Object
        options[name] = !options[name]; // Invert bool at index [name], idk why dot notation doesn't work.
        setIsChecked(options); // Output new isChecked value
    }

    let innerThreeGrid = {
        display: `flex`,
        justifyItems: `start`,
        paddingBottom: `3rem`
    }

    return (
        <div style={innerThreeGrid}>
            <RadioUnit
                value="Basic"
                color="var(--red)" 
                isChecked={isChecked.basic}
                handle={() => handleChange('basic')}/>
            <RadioUnit
                value="Advanced"
                color="var(--yellow)" 
                isChecked={isChecked.advanced}
                handle={() => handleChange('advanced')}/>
            <RadioUnit
                value="Pro"
                color="var(--blue)" 
                isChecked={isChecked.pro}
                handle={() => handleChange('pro')}/>
        </div>
    )

    
}