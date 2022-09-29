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
  str?: number;
  setStr?: Dispatch<SetStateAction<number>>;
  int?: number;
  setInt?: Dispatch<SetStateAction<number>>;
  wis?: number;
  setWis?: Dispatch<SetStateAction<number>>;
  dex?: number;
  setDex?: Dispatch<SetStateAction<number>>;
  con?: number;
  setCon?: Dispatch<SetStateAction<number>>;
  cha?: number;
  setCha?: Dispatch<SetStateAction<number>>;
  hp?: number;
  setHp?: Dispatch<SetStateAction<number>>;
  equipement?: any[];
  setEquipement?: Dispatch<SetStateAction<any[]>>;
  features?: {
    name: string;
    description: string;
  }[];
  setFeatures?: Dispatch<SetStateAction<any[]>>;
  attackBonus?: ReactNode;
  setAttackBonus?: Dispatch<SetStateAction<ReactNode>>;
  savingThrows?: ReactNode;
  setSavingThrows?: Dispatch<SetStateAction<ReactNode>>;
} | null>(null);

const CharacterDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("Character Name");
  const [characterClass, setCharacterClass] = useState<string>(
    "Choose Character Class"
  );
  const [armorClass, setArmorClass] = useState<number>(0);
  const [str, setStr] = useState<number>(0);
  const [int, setInt] = useState<number>(0);
  const [wis, setWis] = useState<number>(0);
  const [dex, setDex] = useState<number>(0);
  const [con, setCon] = useState<number>(0);
  const [cha, setCha] = useState<number>(0);
  const [hp, setHp] = useState<number>(0);
  const [equipement, setEquipement] = useState<any[]>([]);
  const [features, setFeatures] = useState<
    { name: string; availableFromLevel: number; description: string }[]
  >([]);
  const [attackBonus, setAttackBonus] = useState<ReactNode>(<></>);
  const [savingThrows, setSavingThrows] = useState<ReactNode>(<></>);

  const value = useMemo(
    () => ({
      name,
      setName,
      characterClass,
      setCharacterClass,
      armorClass,
      setArmorClass,
      str,
      setStr,
      int,
      setInt,
      wis,
      setWis,
      dex,
      setDex,
      con,
      setCon,
      cha,
      setCha,
      hp,
      setHp,
      equipement,
      setEquipement,
      features,
      setFeatures,
      attackBonus,
      setAttackBonus,
      savingThrows,
      setSavingThrows,
    }),
    [
      name,
      characterClass,
      str,
      int,
      wis,
      dex,
      con,
      cha,
      hp,
      equipement,
      features,
      attackBonus,
      savingThrows,
    ]
  );

  return (
    <CharacterDetailsContext.Provider value={value}>
      {children}
    </CharacterDetailsContext.Provider>
  );
};

export { CharacterDetailsProvider, CharacterDetailsContext };
