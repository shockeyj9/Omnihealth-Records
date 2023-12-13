const {User} = require('../../models')
const {signToken,AuthenticationError} = require('../../utils/auth')

module.exports = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        user: async (parent, { _id }) => {
            return User.findOne({ _id });
          },
    },
    Mutation: {
        addUser: async (
            parent, 
            {username,password,email}
        )=>{
            return await User.create({
                username,
                password,
                email
            });
        },
        updateUser: async (
            parent,
            {_id,username,password,email}
        )=>{
            return User.findByIdAndUpdate(
                _id,
                {username,password,email},
                {new: true}
            )
        },
        deleteUser: async (
            parent,
            {_id}
        )=>{
            return User.findByIdAndDelete({_id})
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
            return { token, user };
          },
    }

}