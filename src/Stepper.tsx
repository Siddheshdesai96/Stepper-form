import React, { useState } from 'react';
import { useStyletron } from 'baseui';
import { ProgressSteps, Step, ProgressStepsProps } from 'baseui/progress-steps';
import { Button, SHAPE, SIZE } from 'baseui/button';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Skills from './Skills';
import PersonalInformation from './PersonalInformation';

interface CustomProgressStepsProps extends ProgressStepsProps {
  onStepChange: ({ next }: { next: number }) => void;
}

const Stepper: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [css, theme] = useStyletron();

  const handleStepChange = ({ next }: { next: number }) => {
    setCurrent(next);
  };

  const customProgressStepsProps: CustomProgressStepsProps = {
    current,
    onStepChange: handleStepChange,
  };

  const stepperStyles = {
    width: '200px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    height: '100%',
    display: 'block', 
  };

  return (
    <div className={css({ display: 'flex', height: '100vh' })}>
     
      <div className={css(stepperStyles)}>
        <ProgressSteps {...customProgressStepsProps}>
          <Step title="Personal Information" />
          <Step title="Work History" />
          <Step title="Education" />
          <Step title="Skills" />
        </ProgressSteps>
      </div>

      <div className={css({ flex: '1', padding: '20px' })}>
        {current === 0 && <PersonalInformation />}
        {current === 1 && <WorkHistory />}
        {current === 2 && <Education />}
        {current === 3 && <Skills />}

        
        <div className={css({ marginTop: theme.sizing.scale600, display: 'flex', justifyContent: 'space-between' })}>
          <Button
            shape={SHAPE.pill}
            size={SIZE.large}
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </Button>
          <Button
            shape={SHAPE.pill}
            size={SIZE.large}
            disabled={current === 3}
            onClick={() => setCurrent(current + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;



// import React, { useState, useEffect } from 'react';
// import { useStyletron } from 'baseui';
// import { ProgressSteps, Step, ProgressStepsProps } from 'baseui/progress-steps';
// import { Button, SHAPE, SIZE } from 'baseui/button';
// import { Drawer } from 'baseui/drawer';
// import { Menu } from 'baseui/icon';
// import WorkHistory from './WorkHistory';
// import Education from './Education';
// import Skills from './Skills';
// import PersonalInformation from './PersonalInformation';

// interface CustomProgressStepsProps extends ProgressStepsProps {
//   onStepChange: ({ next }: { next: number }) => void;
// }

// const Stepper: React.FC = () => {
//   const [current, setCurrent] = useState(0);
//   const [css, theme] = useStyletron();
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleStepChange = ({ next }: { next: number }) => {
//     setCurrent(next);
//   };

//   const customProgressStepsProps: CustomProgressStepsProps = {
//     current,
//     onStepChange: handleStepChange,
//   };

//   const stepperStyles = {
//     width: '250px',
//     backgroundColor: '#f0f0f0',
//     padding: '0px',
//     height: '100%',
//     display: 'block',
//   };

//   const handleResize = () => {
//     const mobileView = window.matchMedia('(max-width: 500px)').matches;
//     setIsMobileView(mobileView);
//   };

//   const handleHamburgerClick = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={css({ display: 'flex', height: '100vh' })}>
//       {isMobileView && (
//         <>
//           <Button
//             shape={SHAPE.square}
//             size={SIZE.large}
//             onClick={handleHamburgerClick}
//           >
//             <Menu size={24} />
//           </Button>
//           <Drawer
//             isOpen={isDrawerOpen}
//             autoFocus
//             onClose={() => setIsDrawerOpen(false)}
//           >
//             <Button onClick={() => setCurrent(0)}>Personal Information</Button>
//             <Button onClick={() => setCurrent(1)}>Work History</Button>
//             <Button onClick={() => setCurrent(2)}>Education</Button>
//             <Button onClick={() => setCurrent(3)}>Skills</Button>
//           </Drawer>
//         </>
//       )}

//       {!isMobileView && (
//         <div className={css(stepperStyles)}>
//           <ProgressSteps {...customProgressStepsProps}>
//             <Step title="Personal Information" />
//             <Step title="Work History" />
//             <Step title="Education" />
//             <Step title="Skills" />
//           </ProgressSteps>
//         </div>
//       )}

//       <div className={css({ flex: '1', padding: '20px' })}>
//         {current === 0 && <PersonalInformation />}
//         {current === 1 && <WorkHistory />}
//         {current === 2 && <Education />}
//         {current === 3 && <Skills />}

//         <div
//           className={css({
//             marginTop: theme.sizing.scale600,
//             display: 'flex',
//             justifyContent: 'space-between',
//           })}
//         >
//           <Button
//             shape={SHAPE.pill}
//             size={SIZE.large}
//             disabled={current === 0}
//             onClick={() => setCurrent(current - 1)}
//           >
//             Previous
//           </Button>
//           <Button
//             shape={SHAPE.pill}
//             size={SIZE.large}
//             disabled={current === 3}
//             onClick={() => setCurrent(current + 1)}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stepper;
  