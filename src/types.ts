export interface ChecklistItem {
  id: string;
  title: string;
  guideline: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  items: ChecklistItem[];
}

export interface ChecklistData {
  modules: Module[];
}
