// /**
// *
// * WeightForm
// *
// */

// import React from 'react';
// import { Field, reduxForm } from 'redux-form';
// import styles from './styles.css';

// let WeightForm = (props) => {
//   const { handleSubmit } = props;
//   return (
//     <div className={styles.weightForm}>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="userWeight">Gewicht</label>
//           <div>
//             <Field name="userWeight" component="input" type="text" placeholder="80" /><span><strong>KG</strong></span>
//           </div>
//         </div>
//         <div>
//           <label htmlFor="userFatPercentage">Vet percentage</label>
//           <div>
//             <Field name="userFatPercentage" component="input" type="text" placeholder="10" /><span><strong>%</strong></span>
//           </div>
//         </div>
//         <div>
//           <button type="submit">Toevoegen</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// WeightForm = reduxForm({
//   form: 'weightForm',
// })(WeightForm);

// export default WeightForm;
