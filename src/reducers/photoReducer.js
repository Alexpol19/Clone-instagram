let initialState={
   // all photo with server
   photosData:[
   ],
   // one detailed foto
   detailedPhoto: {},
}
const photoReducer=(state=initialState, action)=>{
   switch(action.type){
      case 'SET_PHOTOS': 
         return {...state, photosData: [...state.photosData, ...action.photos] }
      case 'SET_DETAILED_PHOTO':
         return {...state, detailedPhoto: action.detailedPhoto}
      default :
         return state;
   }
}
export default photoReducer;