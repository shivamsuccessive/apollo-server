const userResolvers = {
   
    getMyProfile : () => 
        {
            return {
                    id : 101,
                    name : 'Test',
                    email : 'Test@gmail.com'
            }
        }    
}

module.exports = userResolvers;
