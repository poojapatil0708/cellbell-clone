import mongoose, { Schema, Document } from 'mongoose';

interface UserType extends Document {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});

const UserModel = mongoose.model<UserType>('User', UserSchema);

export default UserModel;
export type { UserType };