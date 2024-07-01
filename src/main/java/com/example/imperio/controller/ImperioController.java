package com.example.imperio.controller;


import com.example.imperio.dto.*;
import com.example.imperio.service.MasterCreateService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Setter
@CrossOrigin("http://localhost:4000")
@RestController
@RequestMapping("/api/master")
public class ImperioController {

    @Autowired
    private MasterCreateService masterCreateService;

    //Build ADD Masters REST API
    @PostMapping("/addRegion")
    public ResponseEntity<RegionMasterCreateDto> createDtoResponseEntity(@RequestBody RegionMasterCreateDto regionMasterCreateDto){

        RegionMasterCreateDto saveRegionMaster = masterCreateService.createRegionMaster(regionMasterCreateDto);

        return new ResponseEntity<>(saveRegionMaster, HttpStatus.CREATED);
    }

    @PostMapping("/addExecutive")
    public ResponseEntity<ExecutiveMasterCreateDto> createDtoResponseEntity(@RequestBody ExecutiveMasterCreateDto executiveMasterCreateDto){

        ExecutiveMasterCreateDto saveExecutiveMaster = masterCreateService.createExecutiveMaster(executiveMasterCreateDto);

        return new ResponseEntity<>(saveExecutiveMaster, HttpStatus.CREATED);
    }


    @PostMapping("/addDistributor")
    public ResponseEntity<DistributorMasterCreateDto> createDtoResponseEntity(@RequestBody DistributorMasterCreateDto distributorMasterCreateDto){

        DistributorMasterCreateDto saveDistributorMaster = masterCreateService.createDistributorMaster(distributorMasterCreateDto);

        return new ResponseEntity<>(saveDistributorMaster, HttpStatus.CREATED);
    }

    @PostMapping("/addProduct")
    public ResponseEntity<ProductMasterCreateDto> createDtoResponseEntity(@RequestBody ProductMasterCreateDto productMasterCreateDto){

        ProductMasterCreateDto saveProductMaster = masterCreateService.createProductMaster(productMasterCreateDto);

        return new ResponseEntity<>(saveProductMaster, HttpStatus.CREATED);
    }


    @PostMapping("/addGodown")
    public ResponseEntity<GodownMasterCreateDto> createDtoResponseEntity(@RequestBody GodownMasterCreateDto godownMasterCreateDto){
        GodownMasterCreateDto saveGodownMaster = masterCreateService.createGodownMaster(godownMasterCreateDto);

        return new ResponseEntity<>(saveGodownMaster, HttpStatus.CREATED);
    }

    @PostMapping("/addUnit")
    public ResponseEntity<UnitMasterCreateDto> createDtoResponseEntity(@RequestBody UnitMasterCreateDto unitMasterCreateDto){

        UnitMasterCreateDto saveUnitMaster = masterCreateService.createUnitMaster(unitMasterCreateDto);

        return new ResponseEntity<>(saveUnitMaster, HttpStatus.CREATED);

    }

    @PostMapping("/addVoucherType")
    public ResponseEntity<VoucherTypeCreateDto> createDtoResponseEntity(@RequestBody VoucherTypeCreateDto voucherTypeCreateDto){

        VoucherTypeCreateDto saveVoucherTypeMaster = masterCreateService.createVoucherType(voucherTypeCreateDto);

        return new ResponseEntity<>(saveVoucherTypeMaster, HttpStatus.CREATED);

    }


    @PostMapping("/addVoucherTypeMaster")
    public ResponseEntity<VoucherTypeMasterCreateDto> createDtoResponseEntity(@RequestBody VoucherTypeMasterCreateDto voucherTypeMasterCreateDto){

        VoucherTypeMasterCreateDto saveVoucherTypeNameMaster = masterCreateService.createVoucherTypeMaster(voucherTypeMasterCreateDto);

        return new ResponseEntity<>(saveVoucherTypeNameMaster, HttpStatus.CREATED);

    }

    @PostMapping("/addLedgerMaster")
    public ResponseEntity<LedgerMasterCreateDto> createDtoResponseEntity(@RequestBody LedgerMasterCreateDto ledgerMasterCreateDto){

        LedgerMasterCreateDto saveLedgerMaster = masterCreateService.createLedgerMaster(ledgerMasterCreateDto);

        return new ResponseEntity<>(saveLedgerMaster, HttpStatus.CREATED);

    }




    //Build GET Master Ids REST API
    @GetMapping("/displayRegion/{regionMasterId}")
    public ResponseEntity<RegionMasterCreateDto> getDataByRegionMasterId(@PathVariable String regionMasterId){

        RegionMasterCreateDto regionMasterCreateDto = masterCreateService.getRegionMaster(regionMasterId);


        return ResponseEntity.ok(regionMasterCreateDto);
    }

    @GetMapping("/displayExecutive/{executiveCode}")
    public ResponseEntity<ExecutiveMasterCreateDto> getDataByExecutiveCode(@PathVariable String executiveCode){

        ExecutiveMasterCreateDto executiveMasterCreateDto = masterCreateService.getExecutiveMaster(executiveCode);

        return ResponseEntity.ok(executiveMasterCreateDto);
    }

    @GetMapping("/displayDistributor/{distributorCode}")
    public ResponseEntity<DistributorMasterCreateDto> getDataByDistributorCode(@PathVariable String distributorCode){

        DistributorMasterCreateDto distributorMasterCreateDto = masterCreateService.getDistributorMaster(distributorCode);

        return ResponseEntity.ok(distributorMasterCreateDto);
    }

    @GetMapping("/displayProduct/{productCode}")
    public ResponseEntity<ProductMasterCreateDto> getDataByProductCode(@PathVariable String productCode){

        ProductMasterCreateDto productMasterCreateDto = masterCreateService.getProductMaster(productCode);

        return ResponseEntity.ok(productMasterCreateDto);
    }


    @GetMapping("/displayGodown/{godownCode}")
    public ResponseEntity<GodownMasterCreateDto> getDataByGodownCode(@PathVariable String godownCode){

        GodownMasterCreateDto godownMasterCreateDto = masterCreateService.getGodownMaster(godownCode);

        return ResponseEntity.ok(godownMasterCreateDto);
    }

    @GetMapping("/displayUnit/{uom}")
    public ResponseEntity<UnitMasterCreateDto> getDataByUom(@PathVariable String uom){
        UnitMasterCreateDto unitMasterCreateDto = masterCreateService.getUnitMaster(uom);

        return ResponseEntity.ok(unitMasterCreateDto);
    }

    @GetMapping("/displayVoucherType/{voucherType}")
    public ResponseEntity<VoucherTypeCreateDto> getDataByVoucherType(@PathVariable String voucherType){

        VoucherTypeCreateDto voucherTypeCreateDto =masterCreateService.getVoucherType(voucherType);

        return ResponseEntity.ok(voucherTypeCreateDto);

    }


    @GetMapping("/displayVoucherTypeName/{voucherTypeName}")
    public ResponseEntity<VoucherTypeMasterCreateDto> getDataVoucherTypeName(@PathVariable String voucherTypeName){

        VoucherTypeMasterCreateDto voucherTypeMasterCreateDto = masterCreateService.getVoucherTypeName(voucherTypeName);

        return ResponseEntity.ok(voucherTypeMasterCreateDto);

    }

    @GetMapping("/displayLedger/{ledgerCode}")
    public ResponseEntity<LedgerMasterCreateDto> getDataLedgerCode(@PathVariable String ledgerCode){

        LedgerMasterCreateDto ledgerMasterCreateDto = masterCreateService.getLedgerCode(ledgerCode);

        return ResponseEntity.ok(ledgerMasterCreateDto);

    }


    //Build GET All Master Ids REST API
    @GetMapping("/allRegion")
    public ResponseEntity<List<RegionMasterCreateDto>> getAllRegionMasterIds(){

        List<RegionMasterCreateDto> allRegionMasters = masterCreateService.getAllRegionMasterIds();

        return ResponseEntity.ok(allRegionMasters);
    }

    @GetMapping("/allExecutive")
    public ResponseEntity<List<ExecutiveMasterCreateDto>> getAllExecutiveMasterCodes(){

        List<ExecutiveMasterCreateDto> allExecutiveMasters = masterCreateService.getAllExecutiveMasterCodes();

        return ResponseEntity.ok(allExecutiveMasters);
    }

    @GetMapping("/allDistributor")
    public ResponseEntity<List<DistributorMasterCreateDto>> getAllDistributorMasterCodes(){

        List<DistributorMasterCreateDto> allDistributorMasters = masterCreateService.getAllDistributorMaterCodes();

        return ResponseEntity.ok(allDistributorMasters);

    }

    @GetMapping("/allProduct")
    public ResponseEntity<List<ProductMasterCreateDto>> getAllProductMasterCodes(){

        List<ProductMasterCreateDto> allProductMasters = masterCreateService.getAllProductMasterCodes();

        return ResponseEntity.ok(allProductMasters);

    }


    @GetMapping("/allGodown")
    public ResponseEntity<List<GodownMasterCreateDto>> getAllGodownMasterCodes(){

        List<GodownMasterCreateDto> allGodownMaster = masterCreateService.getAllGodownMasterCodes();


        return ResponseEntity.ok(allGodownMaster);
    }

    @GetMapping("/allUnits")
    public ResponseEntity<List<UnitMasterCreateDto>> getAllUnits(){

        List<UnitMasterCreateDto> allUnits = masterCreateService.getAllUnits();

        return ResponseEntity.ok(allUnits);
    }

    @GetMapping("/allVoucherTypes")
    public ResponseEntity<List<VoucherTypeCreateDto>> getAllVoucherType(){

        List<VoucherTypeCreateDto> allVoucherTypes = masterCreateService.getAllVoucherTypes();

        return ResponseEntity.ok(allVoucherTypes);

    }

    @GetMapping("/allVoucherTypeMaster")
    public ResponseEntity<List<VoucherTypeMasterCreateDto>> getAllVoucherTypeMaster(){

        List<VoucherTypeMasterCreateDto> allVoucherTypeMaster = masterCreateService.getAllVoucherTypeNames();

        return ResponseEntity.ok(allVoucherTypeMaster);

    }

    @GetMapping("/allLedgers")
    public ResponseEntity<List<LedgerMasterCreateDto>> getAllLedgerMaster(){

        List<LedgerMasterCreateDto> allLedgerMaster = masterCreateService.getAllLedgerCodes();

        return ResponseEntity.ok(allLedgerMaster);

    }


    //Build UPDATE Master REST API
    @PutMapping("/alterRegionMaster/{regionMasterId}")
    public ResponseEntity<RegionMasterCreateDto> updateRegion(@PathVariable String regionMasterId, @RequestBody RegionMasterCreateDto updatedRegion){

        RegionMasterCreateDto regionMasterCreateDto = masterCreateService.updateRegion(regionMasterId, updatedRegion);

        return ResponseEntity.ok(regionMasterCreateDto);
    }

    @PutMapping("/alterExecutiveMaster/{executiveCode}")
    public ResponseEntity<ExecutiveMasterCreateDto> updateExecutive(@PathVariable String executiveCode, @RequestBody ExecutiveMasterCreateDto updatedExecutive){

        ExecutiveMasterCreateDto executiveMasterCreateDto = masterCreateService.updateExecutive(executiveCode, updatedExecutive);

        return ResponseEntity.ok(executiveMasterCreateDto);
    }

    @PutMapping("/alterDistributorMaster/{distributorCode}")
    public ResponseEntity<DistributorMasterCreateDto> updateDistributor(@PathVariable String distributorCode, @RequestBody DistributorMasterCreateDto updatedDistributor){

        DistributorMasterCreateDto distributorMasterCreateDto = masterCreateService.updateDistributor(distributorCode, updatedDistributor);

        return ResponseEntity.ok(distributorMasterCreateDto);
    }

    @PutMapping("/alterProductMaster/{productCode}")
    public ResponseEntity<ProductMasterCreateDto> updateProduct(@PathVariable String productCode, @RequestBody ProductMasterCreateDto updatedProduct){

        ProductMasterCreateDto productMasterCreateDto = masterCreateService.updateProduct(productCode,updatedProduct);

        return ResponseEntity.ok(productMasterCreateDto);
    }



    @PutMapping("/alterGodownMaster/{godownCode}")
    public ResponseEntity<GodownMasterCreateDto> updateGodown(@PathVariable String godownCode,@RequestBody GodownMasterCreateDto updatedGodown){

        GodownMasterCreateDto godownMasterCreateDto = masterCreateService.updateGodown(godownCode,updatedGodown);

        return ResponseEntity.ok(godownMasterCreateDto);

    }


    @PutMapping("/alterVoucherTypeMaster/{voucherTypeName}")
    public ResponseEntity<VoucherTypeMasterCreateDto> updateVoucherTypeMaster(@PathVariable String voucherTypeName, @RequestBody VoucherTypeMasterCreateDto updatedVoucherTypeMaster){

        VoucherTypeMasterCreateDto voucherTypeMasterCreateDto = masterCreateService.updateVoucherTypeMaster(voucherTypeName,updatedVoucherTypeMaster);

        return ResponseEntity.ok(voucherTypeMasterCreateDto);

    }

    @PutMapping("/alterLedgerMaster/{ledgerCode}")
    public ResponseEntity<LedgerMasterCreateDto> updateLedgerMaster(@PathVariable String ledgerCode, @RequestBody LedgerMasterCreateDto updatedLedgerMaster){

        LedgerMasterCreateDto ledgerMasterCreateDto = masterCreateService.updateLedgerMaster(ledgerCode,updatedLedgerMaster);

        return ResponseEntity.ok(ledgerMasterCreateDto);

    }


    //Build DELETE Ledger REST API
    @DeleteMapping("/deleteRegion/{regionMasterId}")
    public ResponseEntity<String> deleteRegion(@PathVariable String regionMasterId){

        masterCreateService.deleteRegion(regionMasterId);

        return ResponseEntity.ok("Region deleted successfully!.");
    }

    @DeleteMapping("/deleteExecutive/{executiveCode}")
    public ResponseEntity<String> deleteExecutive(@PathVariable String executiveCode){

        masterCreateService.deleteExecutive(executiveCode);

        return ResponseEntity.ok("Executive deleted successfully!.");
    }

    @DeleteMapping("/deleteDistributor/{distributorCode}")
    public ResponseEntity<String> deleteDistributor(@PathVariable String distributorCode){

        masterCreateService.deleteDistributor(distributorCode);

        return ResponseEntity.ok("Distributor deleted successfully!.");

    }

    @DeleteMapping("/deleteProduct/{productCode}")
    public ResponseEntity<String> deleteProduct(@PathVariable String productCode){

        masterCreateService.deleteProduct(productCode);

        return ResponseEntity.ok("Product deleted successfully!.");
    }


    @DeleteMapping("/deleteGodown/{godownCode}")
    public ResponseEntity<String> deleteGodown(@PathVariable String godownCode){

        masterCreateService.deleteGodown(godownCode);


        return ResponseEntity.ok("Godown deleted successfully!.");

    }

    @DeleteMapping("/deleteUnit/{uom}")
    public ResponseEntity<String> deleteUnit(@PathVariable String uom){

        masterCreateService.deleteUnit(uom);

        return ResponseEntity.ok("Unit deleted successfully!.");
    }

    @DeleteMapping("/deleteVoucherType/{voucherType}")
    public ResponseEntity<String> deleteVoucherTypes(@PathVariable String voucherType){

        masterCreateService.deleteVoucherType(voucherType);

        return ResponseEntity.ok("Voucher Type deleted successfully!.");
    }

    @DeleteMapping("/deleteVoucherTypeMaster/{voucherTypeName}")
    public ResponseEntity<String> deleteVoucherTypeMaster(@PathVariable String voucherTypeName){

        masterCreateService.deleteVoucherTypeMaster(voucherTypeName);

        return ResponseEntity.ok("Voucher Type Master deleted successfully!.");

    }

    @DeleteMapping("/deleteLedger/{ledgerCode}")
    public ResponseEntity<String> deleteLedgerMaster(@PathVariable String ledgerCode){

        masterCreateService.deleteLedgerMaster(ledgerCode);

        return ResponseEntity.ok("Ledger Master deleted successfully!.");
    }


    // Testing


}
