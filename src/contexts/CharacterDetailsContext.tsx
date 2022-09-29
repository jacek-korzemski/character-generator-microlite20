import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

const CharacterDetailsContext = createContext<{
  name?: string;
  setName?: Dispatch<SetStateAction<string>>;
  characterClass?: string;
  setCharacterClass?: Dispatch<SetStateAction<string>>;
  armorClass?: number;
  setArmorClass?: Dispatch<SetStateAction<number>>;
  strength?: number;
  setStrength?: Dispatch<SetStateAction<number>>;
  dexterity?: number;
  setDexterity?: Dispatch<SetStateAction<number>>;
  mind?: number;
  setMind?: Dispatch<SetStateAction<number>>;
  hp?: number;
  setHp?: Dispatch<SetStateAction<number>>;
  equipement?: any[];
  setEquipement?: Dispatch<SetStateAction<any[]>>;
  features?: {
    name: string;
    description: string;
  }[];
  setFeatures?: Dispatch<SetStateAction<any[]>>;
  skills?: {
    communication: number;
    knowledge: number;
    physical: number;
    subterfuge: number;
    survival: number;
  };
  setSkills?: Dispatch<
    SetStateAction<{
      communication: number;
      knowledge: number;
      physical: number;
      subterfuge: number;
      survival: number;
    }>
  >;
} | null>(null);

const CharacterDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("Character Name");
  const [characterClass, setCharacterClass] = useState<string>(
    "Choose Character Class"
  );
  const [armorClass, setArmorClass] = useState<number>(0);
  const [strength, setStrength] = useState<number>(0);
  const [dexterity, setDexterity] = useState<number>(0);
  const [mind, setMind] = useState<number>(0);
  const [hp, setHp] = useState<number>(0);
  const [equipement, setEquipement] = useState<any[]>([]);
  const [features, setFeatures] = useState<
    { name: string; availableFromLevel: number; description: string }[]
  >([]);
  const [skills, setSkills] = useState<{
    communication: number;
    knowledge: number;
    physical: number;
    subterfuge: number;
    survival: number;
  }>({
    communication: 0,
    knowledge: 0,
    physical: 0,
    subterfuge: 0,
    survival: 0,
  });

  const value = useMemo(
    () => ({
      name,
      setName,
      characterClass,
      setCharacterClass,
      armorClass,
      setArmorClass,
      strength,
      setStrength,
      dexterity,
      setDexterity,
      mind,
      setMind,
      hp,
      setHp,
      equipement,
      setEquipement,
      features,
      setFeatures,
      skills,
      setSkills,
    }),
    [
      name,
      characterClass,
      armorClass,
      strength,
      dexterity,
      mind,
      hp,
      equipement,
      features,
      skills,
    ]
  );

  return (
    <CharacterDetailsContext.Provider value={value}>
      {children}
    </CharacterDetailsContext.Provider>
  );
};

export { CharacterDetailsProvider, CharacterDetailsContext };
