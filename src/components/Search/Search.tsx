import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./Search.module.css";

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}

export function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={styles.search}>
      <h2>Busque por usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
