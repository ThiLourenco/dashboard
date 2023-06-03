const useGetMonths = () => {
  return (date) => {
    const getDate = new Date(date);

    const month = getDate.toLocaleDateString('pt-BR', { month: 'long' })
    const year = getDate.toLocaleDateString('pt-BR', { year: '2-digit' })

    // exemple Jan or Fev
    return `${month[0].toUpperCase()}${month.slice(1, 3)}/${year}`;
  };
};

export default useGetMonths;