import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

//otros para aprender
type Event = {
    readonly title: string;
    readonly name: number;
    readonly age: number;
};

export const getTitle = ({ title }: Event): Partial<Event> => {
    return { title };
};

type PageInfo = {
    readonly title: string;
};

type page = 'home' | 'about' | 'contact';

const nav: Record<page, string> = {
    home: 'audiman',
    about: 'audiman',
    contact: 'audiman',
};

//nav.about;

//pick
type SingleEvent = Pick<Event, 'age'>;

const mySingleEvent: SingleEvent = {
    age: 12,
};

//omit
type ConstEvent = Omit<Event, 'age'>;

const myConstEvent: ConstEvent = {
    name: 12,
    title: 'Facebook',
};
// return type
declare function mainFunc(): { readonly a: number; readonly b: string };

type Returned = ReturnType<typeof mainFunc>;
