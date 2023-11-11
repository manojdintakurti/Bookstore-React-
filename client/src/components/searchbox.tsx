import React, {ChangeEvent, useState} from 'react';

type SearchBoxProps = {
    onSearch: (searchTerm: string) => void;
};
function SearchBox({ onSearch }: SearchBoxProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
            <div className="search-box">
                <input
                    type="text"
                    className="search-input"
                    placeholder="What can I help you find?"
                    value={searchTerm}
                    onChange={handleInputChange} />
                <img
                    className="search-icon"
                    src={require("../images/magnifier-icon.png")}
                    alt="Search Icon" width="20" height="20"
                    onClick={handleSearch}
                />
            </div>
    );
}

export default SearchBox;
