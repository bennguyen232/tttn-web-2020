// /* eslint-disable no-use-before-define */
// import React, {FC} from 'react';
// import {makeStyles, createStyles, Theme, Typography, NoSsr} from '@material-ui/core';
// import useAutocomplete from '@material-ui/lab/useAutocomplete';
// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';
// import {useGlobalStyles, mulClasses} from '../utilities';
// import {ScLabel, ScInputWrapper, ScListbox, ScTag} from './StylesComponent';

// const CustomizedHook: FC<Props> = () => {
//   const classes = useStyles();
//   const globals = useGlobalStyles();
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getTagProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'customized-hook-demo',
//     defaultValue: [top100Films[1]],
//     multiple: true,
//     options: top100Films,
//     getOptionLabel: (option) => option.title,
//   });

//   return (
//     <NoSsr>
//       <div>
//         {/* <div {...getRootProps()}> */}
//         {/* <ScLabel {...getInputLabelProps()}>Customized hook</ScLabel> */}
//         <Typography variant="subtitle1" component="h4">
//           {/* {label} */}
//           Customized
//         </Typography>

//         <div
//           ref={setAnchorEl}
//           className={mulClasses([classes.inputWrapper, focused ? 'focused' : ''])}>
//           {value.map((option: FilmOptionType, index: number) => (
//             <ScTag label={option.title} {...getTagProps({index})} />
//           ))}
//         </div>
//         <input {...getInputProps()} className={globals.w100} />
//         {/* </div> */}
//         {groupedOptions.length > 0 ? (
//           <ScListbox {...getListboxProps()}>
//             {groupedOptions.map((option, index) => (
//               <li {...getOptionProps({option, index})}>
//                 <span>{option.title}</span>
//                 <CheckIcon fontSize="small" />
//               </li>
//             ))}
//           </ScListbox>
//         ) : null}
//       </div>
//     </NoSsr>
//   );
// };
// interface Props {
//   data: any;
// }
// export default CustomizedHook;

// interface FilmOptionType {
//   title: string;
//   year: number;
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   {title: 'The Shawshank Redemption', year: 1994},
//   {title: 'The Godfather', year: 1972},
//   {title: 'The Godfather: Part II', year: 1974},
//   {title: 'The Dark Knight', year: 2008},
//   {title: '12 Angry Men', year: 1957},
//   {title: "Schindler's List", year: 1993},
//   {title: 'Pulp Fiction', year: 1994},
//   {title: 'The Lord of the Rings: The Return of the King', year: 2003},
//   {title: 'The Good, the Bad and the Ugly', year: 1966},
//   {title: 'Fight Club', year: 1999},
//   {title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001},
//   {title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980},
// ];

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     content: {},
//     inputWrapper: {
//       width: 300,
//       border: '1px solid #d9d9d9',
//       backgroundColor: '#fff',
//       borderRadius: 4,
//       padding: 1,
//       display: 'flex',
//       flexWrap: 'wrap',
//       '&:hover': {
//         borderColor: '#40a9ff',
//       },
//       '&.focused': {
//         borderColor: '#40a9ff',
//         boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
//       },
//       '& input': {
//         fontSize: 14,
//         height: 30,
//         padding: '4px 6px',
//         width: 0,
//         minWidth: 30,
//         flexGrow: 1,
//         border: 0,
//         margin: 0,
//         outline: 0,
//       },
//     },
//   }),
// );

import React from 'react';

export default function InputSelectControlV2() {
  return <div>InputSelectControlV2</div>;
}
