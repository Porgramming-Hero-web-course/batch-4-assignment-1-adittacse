{
    interface Profile {
        name: string;
        age: number;
        email: string;
    };

    type Updates = Partial<Profile>;

    const updateProfile = (profile : Profile, update: Updates) => {
        return {...profile, ...update};
    };

    const myProfile : Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    console.log(updateProfile(myProfile, { age: 26 }));
}