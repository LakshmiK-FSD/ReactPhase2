import { useEffect,useState} from "react";
function useFetching(brmode){
  const [err, errSeter] = useState(null);
  const [tempList, setTempli] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(brmode)
        .then(res => {
            if(!res.ok)
            {
                throw new Error("Sorry Unable to Load try sometime later");
            }
            return res.json()})
        .then(data => {
            console.log(data);
            setTempli(data)})
        .catch(error => {
          errSeter(error.message);
        });
    }, 2000);
  }, []);
return [err,tempList];
}
export default useFetching;
