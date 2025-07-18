// types/NavigationTypes.ts
export type NavType = {
  id: string;
  label: string;
  path: string;
  category: string;
  children?: NavType[];
};

export type ItemTypes ={
  item: NavType;
}
